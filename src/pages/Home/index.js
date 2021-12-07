import { 
  useEffect, 
  useContext, 
  useState, 
  useMemo } from 'react';
import Swal from "sweetalert2";
import { Context } from '../../context/ProjectContext';
import api from "../../services/api";
import history from '../history';

import plus from '../../assets/plusWhite.svg';

import { Container, ContainerSecondary, ContainerMain } from "../../components/Container";
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import Loader from '../../components/Loader';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';


export default function Home() {

  const {loading, GetProfile, GetProject, projects } = useContext(Context);

  const [project, setProject] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  function handleProject(event) {
    setProject(event.target.value);
  }

  function handleSearch(event){
    setSearchTerm(event.target.value);
  }

  function handleRequestProject(item){
    history.push({
      pathname: `/project/${item?._id}`,
      state: {project: item}
    })
  }

  const filteredProjects = useMemo(() => (
    projects.filter((projects) => (
      projects.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  ), [projects, searchTerm]);

  async function PostProject(project) {
    try {
      const token = localStorage.getItem('token');
  
      await api.post('/project', { name: project }, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(token)}`
        }
      })
      
      setProject('');

      Swal.fire({ 
        title: 'Projeto incluído!',
        confirmButtonText: 'ok',
        icon: 'success', 
      })

      GetProject();
    } catch (err) {
      console.log(err)
      Swal.fire({ 
        title: 'Ops, não foi possível cadastrar o projeto',
        confirmButtonText: 'ok',
        icon: 'error', 
      })
    }
  }

  useEffect(() => {
    GetProject();
    GetProfile();
  }, [GetProject, GetProfile]);

  return (
    <>
      <Loader isLoading={loading} />
      
      <Header/>

      <ContainerMain>
        <section className="container-project">
          <ContainerSecondary>
            <h3>Cadastrar Projetos</h3>
            <div className="content-container-project">
              <Input
                placeholder="Nome do projeto"
                type="text"
                noMargin
                onChange={handleProject}
                value={project}/>
              <Button
                type="button"
                onClick={ () => PostProject(project)}
                small>
                <img src={plus} alt={"cadastro"}/>&nbsp; Cadastrar
              </Button>
            </div>
          </ContainerSecondary>
          <Container>
            <h3>Projetos</h3>

            <div className="container-inputs">
              <Input 
                placeholder="Pesquisar por Projeto" 
                type="text"
                fullWidth
                onChange={handleSearch}
                value={searchTerm}/>
            </div>

            <div className="container-cards">
              {filteredProjects?.map( (item) => 
                <Card onClick={() => handleRequestProject(item)} key={item._id}>
                <strong>{item?.name}</strong>
              </Card>
              )}
              
            </div>
          </Container>
        </section>

      </ContainerMain>
    </>
  )
}