import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity()
export class Route extends BaseEntity {
    @Field(() => String)
    @ObjectIdColumn()
    objectId!: ObjectID;

    @Field()
    @Column()
    id!: number;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    number!: number;

    @Field()
    @Column()
    v!: number;
}