import { Browser, Page } from 'playwright';

declare global {
    const page: Page;
    const browserName: string;
}
