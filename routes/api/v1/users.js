const express = require('express');

const router = express.Router();


const usersApi = require('../../../controllers/api/v1/users_api');
const checkAuth = require("../../../middleware/check-auth");
const orderController = require('../../../controllers/api/v1/order_controller');
const analyticsController = require('../../../controllers/api/v1/analytics_controller');

router.post('/create-session',usersApi.createSession);
router.post('/signup', usersApi.signUp);

router.use(checkAuth);

router.post('/edit', usersApi.editProfile);
router.get('/search/:name', usersApi.searchUser);
router.post('/createhistory',usersApi.createHistory);
// router.get('/gethistory/:userId',usersApi.getHistory);
router.get('/gethistory',usersApi.getHistory);
router.post('/createjob',usersApi.createJob);
router.get('/',usersApi.index);
router.get('/fetchapplications',usersApi.fetchApplication);
router.post('/acceptapplication',usersApi.acceptApplication);
router.post('/rejectapplication',usersApi.rejectApplication);
router.post('/closejob',usersApi.closeJob);
router.post('/createapplication',usersApi.createApplication);
router.post('/edititem',usersApi.editItem);
router.post('/createmenu',usersApi.createMenu);
router.get('/fetchmenus',usersApi.fetchMenu);
router.get('/orders', orderController.getOrders);
router.post('/order', orderController.createOrder);
router.get('/analytics', analyticsController.getAnalytics);

module.exports = router;
