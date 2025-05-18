export const UserRole = {
    Client: 1,
    Sewer: 2,
    CompanyOperator: 3,
    WaterCompany: 4,
    CompanyClient: 5,
    Ministry: 6,
    WaterCompanyOperator: 7,
    TreatmentPlantOperator: 8,
    Admin: 9
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];