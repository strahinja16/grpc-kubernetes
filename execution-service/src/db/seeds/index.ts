import { Connection } from 'typeorm';
import {ProductType} from "../entities/product-type";

export const seedDatabase = async (connection: Connection) => {
    try {
        await connection
            .createQueryBuilder()
            .insert()
            .into(ProductType)
            .values([
                { name: 'SailingYacht', price: 10000 },
                { name: 'SportYacht', price: 25000 },
                { name: 'LuxuryYacht', price: 50000 },
            ])
            .execute();
    } catch (e) {
        console.log(`Error seeding: ${e.toString()}`)
    }
};
