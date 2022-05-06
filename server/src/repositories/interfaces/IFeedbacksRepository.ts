import { ICreateFeedbackDTO } from "../dto/ICreateFeedbackDTO";
import { IFeedback } from "../prisma/interfaces/IFeedback";

export interface IFeedbacksRepository {
  create: (data: ICreateFeedbackDTO) => Promise<IFeedback>;
}
