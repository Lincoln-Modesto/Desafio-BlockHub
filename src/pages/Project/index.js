import { useContext, useEffect, useState } from "react";
import { Context } from '../../context/ProjectContext';
import Swal from "sweetalert2";
import api from "../../services/api";

import plus from '../../assets/plusWhite.svg';

import Loader from "../../components/Loader";
import { Container, ContainerMain, ContainerSecondary } from "../../components/Container";
import { Aside } from "../../components/Aside";
import { Button } from "../../components/Button";
import { InputSmall } from "../../components/Input";
import { CardHour } from "../../components/Card"

export default function Project(props) {

  const {
    user,
    loading,
    GetProfile,

    GetHours,
    hours } = useContext(Context);

  const [project, setProject] = useState({});
  const [hoursWorked, setHoursWorked] = useState('');
  const [day, setDay] = useState('');

  function handleHours(event){
    setHoursWorked(event.target.value);
  }

  function handleDay(event){
    setDay(event.target.value);
  }

  function formatStringData(data) {
    let dia = data.split("-")[2];
    let mes = data.split("-")[1];
    let ano = data.split("-")[0];

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

  useEffect(() => {
    GetProfile();
    GetHours();
    setProject(props.location.state.project);
  }, []);

  return (
    <>
      <Loader isLoading={loading} />

      <ContainerMain>

        <Aside user={user} />
        <section className="container-project">

          <ContainerSecondary>
            <h3>Cadastrar Carga horária</h3>
            <div className="content-container-project">

              <div className="content-inputs">
                <InputSmall
                  placeholder="Horas trabalhadas"
                  type="number"
                  noMargin
                  onChange={handleHours}
                  value={hoursWorked}/>
                <InputSmall
                  placeholder="Data"
                  type="date"
                  noMargin
                  onChange={handleDay}
                  value={day}/>
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
        </section>
      </ContainerMain>
    </>
  )
}