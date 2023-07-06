import { Request, Response } from "express";
import { getScheduleByIdService } from "../services/shedules/getShedules.services";
import { postSchedulesService } from "../services/shedules/postShedules.services";

export const postSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newSchedule = await postSchedulesService(
    req.body,
    req.headers.authorization!.split(" ")[1]
  );

  return res.status(201).send(newSchedule);
};

export const getSchedulesByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateSchedules = await getScheduleByIdService(
    parseInt(req.params.id)
  );

  return res.status(200).send(realEstateSchedules);
};
