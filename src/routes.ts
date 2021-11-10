import { Router, request, response, Request, Response} from 'express'
import { getAlunos } from './controller/AlunosController';
import { saveAluno } from './controller/AlunosController';
import { getAluno } from './controller/AlunosController';
import { updateAluno } from './controller/AlunosController';
import { deleteAluno } from './controller/AlunosController';
import { finishedAluno } from './controller/AlunosController';

const routes = Router()
routes.get('/home', (request: Request, response: Response) => {
return response.json({ message: 'Hello Turma 007!' })
})

routes.get('/alunos', getAlunos)
routes.post('/alunos', saveAluno)
routes.get('/alunos/:id', getAluno)
routes.put('/alunos/:id', updateAluno)
routes.delete('/alunos/:id', deleteAluno)
routes.patch('/alunos/:id', finishedAluno)

export default routes
