import { prisma } from "../../prisma";
import { ICreateFeedbackDTO } from "../dto/ICreateFeedbackDTO";
import { IFeedbacksRepository } from "../interfaces/IFeedbacksRepository";
import { IFeedback } from "./interfaces/IFeedback";

export class PrismaFeedbacksRespository implements IFeedbacksRepository {
  async create({
    type,
    comment,
    screenshot,
  }: ICreateFeedbackDTO): Promise<IFeedback> {
    return await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
