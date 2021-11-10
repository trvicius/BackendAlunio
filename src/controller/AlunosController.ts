import { getRepository } from "typeorm";
import { Alunos } from '../entity/Alunos';
import { Request, Response } from "express";

export const getAlunos = async (request: Request, response: Response) => {

    const alunos = await getRepository(Alunos).find()

    return response.json(alunos);
};

export const saveAluno = async (request: Request, response: Response) => {
    const aluno = await getRepository(Alunos).save(request.body)
    return response.json(aluno);
};


export const getAluno = async (request: Request, response: Response) => {
    const { id } = request.params
    const aluno = await getRepository(Alunos).findOne(id)
    return response.json(aluno);
};
export const updateAluno = async (request: Request, response: Response) => {
    const { id } = request.params
    const aluno = await getRepository(Alunos).update(id, request.body)
    if (aluno.affected == 1) {
        const taskUpdated = await getRepository(Alunos).findOne(id)
        return response.json(taskUpdated);
    }
    else {
        return response.status(404).json({ message: 'Tarefa não encontrada!' })
    }
};
export const deleteAluno = async (request: Request, response: Response) => {
    const { id } = request.params
    const aluno = await getRepository(Alunos).delete(id)
    if (aluno.affected == 1) {
        return response.status(200).json({ message: "Tarefa excluída com Sucesso!" });
    }
    else {
        return response.status(404).json({ message: 'Tarefa não encontrada!' })
    }
};
export const finishedAluno = async (request: Request, response: Response) => {
         const { id } = request.params
         const aluno = await getRepository(Alunos).update(id, {
           finished: true,
    })

    if (aluno.affected == 1) {
        const alunoFinished = await getRepository(Alunos).findOne(id)
        return response.json(alunoFinished);
    }
    else {
        return response.status(404).json({ message: 'Tarefa não encontrada!' })
    }
};