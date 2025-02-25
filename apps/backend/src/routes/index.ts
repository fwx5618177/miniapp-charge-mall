import { Router } from 'express';

const router = Router();

// 示例路由
router.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

export default router;
