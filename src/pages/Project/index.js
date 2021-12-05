import { useContext, useEffect, useState } from "react";
import { Context } from '../../context/ProjectContext';

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

  const [project, setProject] = useState({})

  useEffect(() => {
    GetProfile();
    GetHours();
    setProject(props.location.state.project);
  }, [])

  const filteredHours = hours.filter((item) => (
    item?.project === project?._id
  ))

  function formatStringData(data) {
    var dia = data.split("-")[2];
    var mes = data.split("-")[1];
    var ano = data.split("-")[0];

    return dia + '/' + mes + '/' + ano 
  }

  return (
    <>
      <Loader isLoading={loading} />
      <ContainerMain>
        <Aside user={user} />
        <section className="container-project">
          <ContainerSecondary>
            <h3>Cadastrar Carga horária</h3>
            <div className="content-container-project">
              <InputSmall
                placeholder="Horas trabalhadas"
                type="text"
                noMargin />
              <InputSmall
                placeholder="Data"
                type="date"
                noMargin />
              <Button
                type="button"
                small>
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