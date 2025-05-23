export const UserRoutes = {
  Register: "/admin/register",
  AdminLogin: "/admin/login",
  MentorLogin: '/mentor/login',
  MentorCreate: '/mentor/create',
  MentorUpdate: '/mentor/update',
  StudentLogin: '/student/login',
  StudentRegister: '/student/register',
}

export const MentorRoutes = {

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