import { useContext, useEffect, useState } from "react";
import { Context } from '../../context/ProjectContext';
import Swal from "sweetalert2";
import api from "../../services/api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import plus from '../../assets/plusWhite.svg';

import Loader from "../../components/Loader";
import { Container, ContainerMain, ContainerSecondary } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { InputSmall } from "../../components/Input";
import { CardHour } from "../../components/Card"

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Project(props) {

  const {
    user,
    loading,
    GetProfile,

    GetHours,
    hours } = useContext(Context);

  let arrDates = [];
  const [project, setProject] = useState({});
  const [hoursWorked, setHoursWorked] = useState('');
  const [day, setDay] = useState('');

  function handleHours(event) {
    setHoursWorked(event.target.value);
  }

  function handleDay(event) {
    setDay(event.target.value);
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

    const filteredHours = hours.filter((item) => (
      item?.project === project?._id
    ));
  
    let arrHours = [];
  
    filteredHours.map((item) => {
      arrHours.push(item?.hours) 
    })

    const total = arrHours?.reduce(
      (total, currentElement) => total + currentElement, 0
    )
    const totalHours = [total]

  const dataHoursPerDay = {
    labels: arrDates,
    datasets: [
      {
        label: 'Horas por dia',
        data: arrHours,
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
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
          'rgba(54, 162, 235, 0.4)',
        ],
      },
    ],
  }

  useEffect(() => {
    GetProfile();
    GetHours();
    setProject(props.location.state.project);
  }, []);

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
              <h3>{project.name}</h3>
              <div >
                <h4>Pesquisar por data</h4>
                <InputSmall
                  placeholder="Data"
                  type="date"
                />
              </div>
            </div>
            <div className="container-cards">
              {filteredHours?.map((item) =>
                <CardHour key={item?._id}>
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
              <h3>{project?.name + " - Horas por Meses"}</h3>
            </Container>
          </div>

        </section>
      </ContainerMain>
    </>
  )
}