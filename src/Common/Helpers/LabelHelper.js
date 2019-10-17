import React from 'react'
import { Home, Loop, Train, InsertDriveFile, SettingsApplications, Pageview } from '@material-ui/icons';

export const Labels = {
    PortalCCO: 'Portal CCO',
    Search: 'Pesquisar...',
    Notifications: 'Notificações',
    Profile: 'Perfil',
    MyAccount: 'Minhas Configurações',
    Login: 'Entrar',
    Logout: 'Sair',
    Home: 'Home',
    AddGraph: 'Adicionar gráfico',
    RemoveGraph: 'Remover gráfico',
    Sidebar: {
        PortalCCO: { name: 'Portal CCO', icon: <Home />} ,
        Circulacao: { name: 'Circulação', icon: <Loop />},
        Cat: { name: 'CAT', icon: <Train />},
        Relatorio: { name: 'Relatórios', icon: <InsertDriveFile />},
        Servicos: { name: 'Serviços', icon: <SettingsApplications />},
        Consultas: { name: 'Consultas', icon: <Pageview />}
    }
};

export default null;