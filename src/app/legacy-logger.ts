import { Logger } from "./logger";

export const LegacyLogger: Logger = {
    prefix: 'legacy-logger',
    log(): void {
      console.log(`prefix: ${this.prefix}`);
    }
}