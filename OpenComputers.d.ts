 
declare module "computer" {
    namespace Computer {
        export function address(): string;
        export function tmpAddress(): string;
        export function freeMemory(): number;
        export function totalMemory(): number;
        export function energy(): number;
        export function maxEnergy(): number;
        export function uptime(): number;
        export function shutdown(reboot: boolean);

        export function getBootAddress(): string;
        export function setBootAddress(address: string);
        export function runLevel(): string | number;
        export function users(): string;
        
    }
    export = Computer;
}

declare module "robot" {
    namespace robot {
        export function forward(): void
        export function move(sides: number)

    }
    // interface robot2 {
    //     forward(): void
    //     move(sides: number)
    // }
    export = robot
}