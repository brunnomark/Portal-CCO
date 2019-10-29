import React from 'react';
import { Home, People, Gavel, TrendingUp, DirectionsCar, TrackChangesOutlined, TrainOutlined, Commute, CallToAction, Loop, Train, InsertDriveFile, SettingsApplications, Pageview } from '@material-ui/icons';

export const Labels = {
    PortalCCO: 'Portal CCO',
    Search: 'Pesquisar...',
    Notifications: 'Notificações',
    Profile: 'Perfil',
    MyAccount: 'Minhas Configurações',
    Login: 'Entrar',
    Logout: 'Sair',
    Home: 'Home',
    Email: 'E-mail',
    Password: 'Senha',
    AddGraph: 'Adicionar gráfico',
    RemoveGraph: 'Remover gráfico',
    Sidebar: {
        PortalCCO: {
            id: 0,
            name: 'Portal CCO', 
            icon: <Home />,
            items: {
                submenu1: {
                    id: 1,
                    name: 'Indicadores',
                    icon: <TrendingUp />,
                    route: {
                        path: "/Indicadores/",
                        exactPath: true
                    }
                },
                submenu2: {
                    id: 2,
                    name: 'Valores',
                    icon: <People />
                },
                submenu3: {
                    id: 3,
                    name: 'Regras de Ouro',
                    icon: <Gavel />
                }
            }
        } ,
        Circulacao: {
            id: 4,
            name: 'Circulação', 
            icon: <Loop />,
            items: {
                submenu1: {
                    id: 5,
                    name: 'Registro de impactos',
                    icon: <DirectionsCar />
                },
                submenu2: {
                    id: 6,
                    name: 'Acionamentos de SBs',
                    icon: <CallToAction />
                },
            }
        },
        Cat: { 
            id: 7,
            name: 'CAT', 
            icon: <Train />,
            items: {
                submenu1: {
                    id: 8,
                    name: 'Programação de Faixas',
                    icon: <Commute />,
                    route: {
                        path: "/ProgramacaoFaixas/",
                        exactPath: true
                    }
                },
                submenu2: {
                    id: 9,
                    name: 'Necessidade de trens Mensal',
                    icon: <TrainOutlined />
                },
                submenu3: {
                    id: 10,
                    name: 'Rastreador da Baixada',
                    icon: <TrackChangesOutlined />
                }
            }
        },
        Relatorio: { name: 'Relatórios', icon: <InsertDriveFile />},
        Servicos: { name: 'Serviços', icon: <SettingsApplications />},
        Consultas: { name: 'Consultas', icon: <Pageview />}
    }
};

export default null;