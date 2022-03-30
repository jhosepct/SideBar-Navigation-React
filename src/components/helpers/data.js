export const routes ={
    dashboard: '/dashboard',
    projects: '/projects',
    personal: '/projects/personal',
    business:'/projects/business',
    messages: '/messages',
    employees:'/employees',
    shipment:'/shipment',
    file:'/file'
}

export const menuItems = [
    {
      name: "dashboard",
      exact: false,
      to: routes.dashboard,
      iconClassName: "grip-horizontal",
    },
    {
      name: "messages",
      exact: false,
      to: routes.messages,
      iconClassName: "envelope"
    },
    {
      name: "projects",
      exact: false,
      to: routes.projects,
      iconClassName: "chart-pie",
      subMenus: [
        {
          name: "personal",
          to: routes.personal,
          iconClassName: "person"
        },
        {
          name: "business",
          to: routes.business,
          iconClassName: "business-time",
        },
      ],
    },
    
    {
      name: "employees",
      exact: false,
      to: routes.employees,
      iconClassName: "people-arrows",
    },
    {
      name: "shipment",
      exact: false,
      to: routes.shipment,
      iconClassName: "truck",
    },
    {
      name: "file",
      exact: false,
      to: routes.file,
      iconClassName: "file"
    },
  ];
  