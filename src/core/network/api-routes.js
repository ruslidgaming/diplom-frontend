export const UserRoutes = {
    GetById: '/Users/GetUserById',
    GetAllUsers: "/Users/GetAllUsers",
    EnterCode: '/Users/UserEnterCode',
    IdentifyByPhone: '/Users/UserIdentification',
    RefreshToken: '/Users/RefreshAuthorization',
    Authorization: '/Users/Authorization',
    Create: "/Users/CreateUser",
    Update: "/Users/UpdateUser",
    Delete: "/Users",
    EmailConfirm: "/Users/email/send",
    PasswordRecovery: "/Users/password/recovery",
    Approve: "/Users/email/approve",
    AuthorizationByPhone: "/Users/login/phone",
}

export const SewersRoutes = {
  Create: "/Sewers/CreateSewer",
  GetByCompanyId: "/Sewers/GetSewerByCompanyId",
  GetByUserId: "/Sewers/GeSeverByUserId",
  GetAll: "Sewers/all",
  DeleteSewer: "Sewers",
};

export const OrderRoutes = {
  GetAll: "/Order/all",
  Create: "/Order/CreateOrder",
  CreateByPoint: "/Order/СreateOrderByPoint",
  GetByUserId: "/Order/OrdersByUserId",
  GetById: "/Order/OrdersById",
  GetByIdTransporterCompany: "/Order/transporter/orders",
  AttachSewer: "/Order/AttachSewer",
  AttachCompany: "/Order/AttachCompany",
  ChangeStatus: "/Order/ChangeOrderStatus",
  GetByStatusId: "/Order/GetOrdersByStatusId",
  GetCode: "/Order/confirm",
};

export const MunicipalityRoutes = {
  GetAll: "/Municipality/all",
};

export const PickupPointRoutes = {
  Create: "/Order/CreatePickUpPoint",
  GetByUser: "/Order/GetAllPointsByCompany",
  Update: "/Order/UpdatePoint",
  Delete: "/Order/DeletePoint",
};

export const PlantsRoutes = {
  Create: "/Plants/CreatePlant",
  GetByCompany: "/Plants/GetAllCompanyPlants",
};

export const CompanyRoutes = {
  Create: "/Companies/CreateCompany",
  CreateClientCompany: "/Companies/user/clientcompany",
  GetByUserId: "/Companies/user/company",
  UpdateMunicipality: "/Companies/municipalities",
  DeleteMunicipality: "/Companies/municipalities",
};

export const PaymentRoutes = {
  Create: "/PaymentDetails/payment",
  Update: "/PaymentDetails/payment",
  Get: "/PaymentDetails/payment",
};

export const StatRoutes = {
  GetAvgPrice: "/Stats/company/price/avg",
  GetExported: "/Stats/company/waste/exported",
  GetTransportingIncome: "/Stats/company/transport/income",
};

export const WsRoute = `wss://${
  import.meta.env.VITE_WEBSOCKET_HOST
}/socket/notifications`;
