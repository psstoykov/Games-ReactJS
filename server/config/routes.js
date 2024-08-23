import { userRouter } from '../service/user.js'

export default function configRoutes(app) {

    app.use(userRouter)
}

