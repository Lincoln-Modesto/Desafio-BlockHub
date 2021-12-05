import { useContext, useEffect } from "react";
import { Context } from '../../context/ProjectContext';

import plus from '../../assets/plusWhite.svg';

import Loader from "../../components/Loader";
import { Container, ContainerMain, ContainerSecondary } from "../../components/Container";
import { Aside } from "../../components/Aside";
import { Button } from "../../components/Button";
import { InputSmall } from "../../components/Input";
import { CardHour } from "../../components/Card"

export default function Project() {

  const { user, GetProfile } = useContext(Context);

  useEffect(() => {
    GetProfile()
  }, [])

  return (
    <>
      <Loader />
      <ContainerMain>
        <Aside user={user} />
        <section>
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
              <h3>Projeto XX</h3>
              <div >
                <h4>Pesquisar por data</h4>
                <InputSmall
                  placeholder="Data"
                  type="date"
                />
              </div>
            </div>
            <div className="container-cards">
              <CardHour>
                <strong>{"12/12/21"} {"-"} {"Lincoln"}</strong>
                <span>{" -"}{" 6 horas"}</span>
              </CardHour>
             
            </div>
            
          </Container>
        </section>
      </ContainerMain>
    </>
  )
}