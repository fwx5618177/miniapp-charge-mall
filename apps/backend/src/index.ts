import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';
import { User } from './entities/User';

const app = express();

// 中间件
app.use(express.json());

// 数据库连接
createConnection().then(async connection => {
  console.log('Database connected');
  
  // 测试数据库连接
  const user = new User();
  user.username = 'test';
  user.email = 'test@example.com';
  user.password = 'password';
  await connection.manager.save(user);
  console.log('Test user saved');
}).catch(error => console.log(error));

// 路由
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
