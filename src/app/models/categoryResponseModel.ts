import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponsModel extends ResponseModel{
    data:Category[]
}