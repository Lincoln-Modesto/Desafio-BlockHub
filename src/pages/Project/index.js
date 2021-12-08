import { useContext, useEffect, useState, useMemo } from "react";
import { Context } from '../../context/ProjectContext';
import Swal from "sweetalert2";
import api from "../../services/api";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

import plus from '../../assets/plusWhite.svg';
import document from '../../assets/document.svg';

import Loader from "../../components/Loader";
import { Container, ContainerMain, ContainerSecondary } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { InputSmall } from "../../components/Input";
import { CardHour } from "../../components/Card";

import PDFCreator from "../../reports/PDFCreator";
import ReactExport from "react-export-excel";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale);

export default function Project(props) {

  let arrDates = [];

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  const {
    user,
    loading,
    GetProfile,

    GetHours,
    hours } = useContext(Context);

  const [project, setProject] = useState({});
  const [hoursWorked, setHoursWorked] = useState('');
  const [day, setDay] = useState('');
  const [searchDate, setSearchDate] = useState('');

  function handleHours(event) {
    setHoursWorked(event.target.value);
  }

  function handleDay(event) {
    setDay(event.target.value);
  }

  function handleFilterDate(event) {
    setSearchDate(event.target.value)
  }

  function formatStringData(data) {

    let dia = data.split("-")[2];
    let mes = data.split("-")[1];
    let ano = data.split("-")[0];

    arrDates.push(dia + '/' + mes + '/' + ano)
    return dia + '/' + mes + '/' + ano
  }

  async function PostHour() {

    try {
      const token = localStorage.getItem('token');

      const hoursConvert = Number(hoursWorked)

      await api.post('/hours',
        {
          "hours": hoursConvert,
          "day": day,
          "project": project?._id,
          "user": user?._id
        },
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(token)}`
          }
        })

      setHoursWorked('');
      setDay('');

      Swal.fire({
        title: 'Horas incluídas',
        confirmButtonText: 'ok',
        icon: 'success',
      })

      GetHours();
    } catch (err) {
      console.log(err)

      setHoursWorked('');
      setDay('');

      Swal.fire({
        title: 'Ops, não foi possível cadastrar a carga horária',
        confirmButtonText: 'ok',
        icon: 'error',
      })
    }
  }

  /*filtrando horas em comum ao projeto para a listar*/
  const filteredHours = hours.filter((item) => (
    item?.project === project?._id
  ));

  /*definindo horas para o gráfico de pizza*/
  let arrHours = [];

  filteredHours.forEach((item) => {
    arrHours.push(item?.hours)
  })

  /*definindo total de horas para o gráfico de pizza*/
  const total = arrHours?.reduce(
    (total, currentElement) => total + currentElement, 0
  )
  const totalHours = [total]

  /*definindo horas para o gráfico de barras*/
  const arrayHours = [];
  const arrayMonths = [];
  const months = [];

  filteredHours.forEach((hour) => {
    arrayHours.push(hour.hours)

    const data = new Date(hour.day)
    const month = data.getMonth()
    arrayMonths.push(month)
  });

  arrayMonths.forEach((mes) => {
    switch (mes) {
      case 0:
        months.push("Janeiro")
        break;
      case 1:
        months.push("Fevereiro")
        break;
      case 2:
        months.push("Março")
        break;
      case 3:
        months.push("Abril")
        break;
      case 4:
        months.push("Maio")
        break;
      case 5:
        months.push("Junho")
        break;
      case 6:
        months.push("Julho")
        break;
      case 7:
        months.push("Agosto")
        break;
      case 8:
        months.push("Setembro")
        break;
      case 9:
        months.push("Outubro")
        break;
      case 10:
        months.push("Novembro")
        break;
      case 11:
        months.push("Dezembro")
        break;
      default:
        console.log('Não foi possível iterar')
        break
    }
  })

  const dataHoursPerDay = {
    labels: arrDates,
    datasets: [
      {
        label: 'Horas por dia',
        data: arrHours,
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(46, 137, 221, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
        ],
      },
    ],
  };

  const dataTotalHours = {
    labels: [`${project?.name}`],
    datasets: [
      {
        label: 'Horas totais',
        data: totalHours,
        backgroundColor: [
          'rgba(46, 137, 221, 0.4)'
        ],
      },
    ],
  }

  const dataHoursPerMonth = {
    labels: months,
    datasets: [
      {
        label: 'Horas Trabalhadas',
        data: arrayHours,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const filteredSearchDate = useMemo(() => (
    filteredHours.filter((projects) => (
      projects.day?.includes(searchDate)
    ))
  ), [filteredHours, searchDate]);

  const dataExcel = filteredHours.map((item) => {

    let dia = item?.day.split("-")[2];
    let mes = item?.day.split("-")[1];
    let ano = item?.day.split("-")[0];

    const date = dia + '/' + mes + '/' + ano

    return {
      usuario: item.user,
      data: date,
      horas: item.hours
    }

  })

  console.log(dataExcel)

  useEffect(() => {
    GetProfile();
    GetHours();
    setProject(props.location.state.project);
  }, [GetHours, GetProfile, props.location.state.project]);

  return (
    <>
      <Loader isLoading={loading} />
      <Header />
      <ContainerMain>

        <section className="container-project">

          <ContainerSecondary>
            <h3>Cadastrar Horas</h3>
            <div className="content-container-project">

              <div className="content-inputs">
                <InputSmall
                  placeholder="Horas trabalhadas"
                  type="number"
                  noMargin
                  onChange={handleHours}
                  value={hoursWorked} />
                <InputSmall
                  placeholder="Data"
                  type="date"
                  noMargin
                  onChange={handleDay}
                  value={day} />
              </div>

              <Button
                type="button"
                small
                onClick={PostHour}>
                <img src={plus} alt={"cadastro"} />&nbsp; Cadastrar
              </Button>

            </div>
          </ContainerSecondary>

          <Container>
            <div className="container-data">
              <div className="content-data">
                <h3>{project?.name}</h3>

                <Button small onClick={() =>
                  PDFCreator(filteredHours, totalHours, project)}>
                  <img src={document} alt="pdf" />
                  &nbsp; Gerar PDF</Button>

                <ExcelFile filename="Lançamento de horas" element={
                  <Button small>
                    <img src={document} alt="xls" />
                    &nbsp; Gerar XLS
                  </Button>}>
                  <ExcelSheet data={dataExcel} name="Lançamento de Horas" >
                    <ExcelColumn label="Usuário" value="usuario" />
                    <ExcelColumn label="Data" value="data" />
                    <ExcelColumn label="Horas" value="horas" />
                  </ExcelSheet>
                </ExcelFile>

              </div>
              <div>
                <h4>Pesquisar por data</h4>
                <InputSmall
                  placeholder="Data"
                  type="date"
                  onChange={handleFilterDate}
                  value={searchDate}
                />
              </div>
            </div>
            <div className="container-cards">
              {filteredSearchDate?.map((item) =>
                <CardHour key={item?._id}>
                  <strong>{`Usuário: `}{item.user}{" - "}&nbsp;</strong>
                  <strong>{formatStringData(item?.day)}{" - "}&nbsp;</strong>
                  <span>{item?.hours + " Horas"}</span>
                </CardHour>
              )}
            </div>
          </Container>

          <div>
            <Container>
              <h3>Gráficos Totais</h3>
              <div className="charts">
                <div className="pie">
                  <h4>Horas gastas no projeto por dia</h4>
                  <Pie
                    data={dataHoursPerDay}
                    options={{
                      responsive: true
                    }} />
                </div>
                <div className="pie">
                  <h4>Total de horas - {totalHours}h</h4>
                  <Pie
                    data={dataTotalHours}
                    options={{
                      responsive: true
                    }} />
                </div>
              </div>
            </Container>

            <Container>
              <h3>Gráfico Mensal</h3>
              <div className="bar">
                <h4>Horas trabalhadas por mês</h4>
                <Bar
                  data={dataHoursPerMonth}
                  options={{
                    responsive: true,
                  }} />
              </div>
            </Container>
          </div>

        </section>
      </ContainerMain>
    </>
  )
}