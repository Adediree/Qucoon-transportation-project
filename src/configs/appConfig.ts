export type AppConfig = {
    baseUrlDev: string;
    baseUrlProd: string;
    stage: "Dev" | "Prod",
}
export const appConfig: AppConfig = {
    baseUrlDev: 'http://localhost:8080',
    baseUrlProd: 'http://localhost:8080',
    stage: "Dev",
}
