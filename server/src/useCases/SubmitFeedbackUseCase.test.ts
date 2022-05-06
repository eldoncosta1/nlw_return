import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";
import { IFeedback } from "../repositories/prisma/interfaces/IFeedback";

// spies = espiões
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const feedback: IFeedback = {} as IFeedback;

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("SubmitFeedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "exemple comment",
        screenshot: "data:image/png;base64, test.jpg",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toBeCalled();
    expect(sendMailSpy).toBeCalled();
  });

  it("should not be able submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "exemple comment",
        screenshot: "data:image/png;base64, test.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not be able submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64, test.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not be able submit feedback with an invalid screenchot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Ta tudo bugado",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
