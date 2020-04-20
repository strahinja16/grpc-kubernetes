import {ProductType} from "../entities/product-type";
import {MaterialType} from "../entities/material-type";
import {MaterialSpecification} from "../entities/material-specification";
import { Connection } from 'typeorm';
import {Warehouse} from "../entities/warehouse";

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

        const productTypes: ProductType[] = await connection
            .getRepository(ProductType)
            .createQueryBuilder("pt")
            .getMany();

        await connection
            .createQueryBuilder()
            .insert()
            .into(MaterialType)
            .values([
                { name: 'wood' },
                { name: 'aluminium' },
                { name: 'steel' },
                { name: 'fiberglass' },
            ])
            .returning('*')
            .execute();

        const materialTypes: MaterialType[] = await connection
            .getRepository(MaterialType)
            .createQueryBuilder("mt")
            .getMany();

        const materialSpecs: Partial<MaterialSpecification>[] = [];

        productTypes.forEach(pt => {
            materialTypes.forEach((mt: MaterialType) => {
                materialSpecs.push({
                    materialType: mt,
                    productType: pt,
                    quantity: 50,
                });
            })

        });

        await connection
            .createQueryBuilder()
            .insert()
            .into(MaterialSpecification)
            .values(materialSpecs)
            .execute();

        await connection
            .createQueryBuilder()
            .insert()
            .into(Warehouse)
            .values({ name: 'warehouse1', capacity: 50 })
            .execute();

    } catch (e) {
        console.log(`Error seeding: ${e.toString()}`)
    }
};
