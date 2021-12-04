import { 
  useEffect, 
  useContext, 
  useState, 
  useCallback,
  useMemo } from 'react';
import Swal from "sweetalert2";
import { Context } from '../../context/ProjectContext';
import api from "../../services/api";

import userImg from '../../assets/user.svg';
import logo from '../../assets/logo2x.svg';
import plus from '../../assets/plusWhite.svg';
import home from '../../assets/home.svg';
import work from '../../assets/work.svg';
import document from '../../assets/document.svg';
import logout from '../../assets/logout.svg';

import { Container, SideBar, ContainerSecondary } from "../../components/Container";
import { Input } from '../../components/Input';
import { ContainerMain, Email, Name, Logo, Item } from "./styles";
import { Card } from '../../components/Card';
import Loader from '../../components/Loader';
import { Button } from '../../components/Button';

export default function Home() {

  const { user, loading, GetProfile } = useContext(Context);

  const [project, setProject] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);

  function handleProject(event) {
    setProject(event.target.value);
  }

  function handleSearch(event){
    setSearchTerm(event.target.value);
  }

  const filteredProjects = useMemo(() => (
    projects.filter((projects) => (
      projects.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  ), [projects, searchTerm]);

  const GetProject = useCallback(async () => {
    try{
      const token = localStorage.getItem('token');
  
      const {data} = await api.get('/project', {}, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(token)}`
        }
      })
      setProjects(data)
    }catch(err){
      console.log(err)
    }
  }, [])

  async function PostProject(project) {
    try {
      const token = localStorage.getItem('token');
  
      api.post('/project', { name: project }, {
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
  }, [GetProject, GetProfile])

  return (
    <>
      <Loader isLoading={loading} />
      <ContainerMain>

        <SideBar>
          <Logo src={logo} alt="logo" />
          <img src={userImg} alt="user" />

          <Name>{user?.name}</Name>
          <Email>{user?.email}</Email>

          <div className="container-item">
            <Item>
              <img src={home} alt="home" />
              <span>&nbsp; Home</span>
            </Item>
            <Item>
              <img src={work} alt="projetos" />
              <span>&nbsp; Projetos</span>
            </Item>
            <Item>
              <img src={document} alt="relatorios" />
              <span>&nbsp; Relatórios</span>
            </Item>
            <Item>
              <img src={logout} alt="sair" />
              <span>&nbsp; Sair</span>
            </Item>
          </div>
        </SideBar>

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
                onChange={handleSearch}
                value={searchTerm}/>
              <Input placeholder="Pesquisar por Data" type="date" />
            </div>

            <div className="container-cards">
              {filteredProjects?.map( (item) => 
                <Card>
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