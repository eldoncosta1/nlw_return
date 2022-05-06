import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import { NodeMailerMailAdpter } from "./adapters/nodemailer/NodeMailerMailAdapter";
import { prisma } from "./prisma";
import { PrismaFeedbacksRespository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./useCases/SubmitFeedbackUseCase";

export const routes = express.Router();

routes.post("/feedbacks", async (req: Request, res: Response) => {
  const { type, comment, screenshot } = req.body;

  const PrismaFeedbacksRepository = new PrismaFeedbacksRespository();
  const nodemailerMailAdapter = new NodeMailerMailAdpter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    PrismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  const feedback = await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).json({ data: feedback });
});

routes.get("/feedbacks", async (req: Request, res: Response) => {
  const feedbacks = await prisma.feedback.findMany();

  return res.status(200).json({ data: feedbacks });
});
