import { Router } from "express";
import  { login }  from "../controllers/loginController.js";
import { getUser, updateUser, createUser, getUsers, deleteUser } from "../controllers/userController.js";
import { createSaving, getSavings, getSaving, updateSaving, deleteSaving } from "../controllers/savingsController.js";
import { createInvestment, deleteInvestment, getInvestments, getInvestment, updateInvestment } from "../controllers/investmentsController.js";
import { createIncome, deleteIncome, getIncomes, getIncome, updateIncome } from "../controllers/incomesController.js";
import { getExpenses, getExpense, updateExpense, deleteExpense, createExpense } from "../controllers/expensesController.js";
import { createCredit, deleteCredit, getCredits, getCredit, updateCredit } from "../controllers/creditsController.js";
import { createBill, deleteBill, getBills, getBill, updateBill } from "../controllers/billsController.js";


const router = Router()

/**
 * @swagger
 * tags:
 *  name: Login
 *  description: Endpoint Login
 */

/**
 * @swagger
 * /financial/login:
 *  get:
 *   summary: Login
 *   tags: [Login]
 */
router.get('/financial/login', login)



/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Endpoint User
 */

/**
 * @swagger
 * /financial/users:
 *  get:
 *   summary: Get all users
 *   tags: [Users]
 */
router.get('/financial/users', getUsers)

/**
 * @swagger
 * /financial/user/:userId:
 *  get:
 *   summary: Get one User
 *   tags: [Users]
 */
router.get('/financial/user/:userId', getUser)

/**
 * @swagger
 * /financial/newUser:
 *  post:
 *   summary: Create one user
 *   tags: [Users]
 */
router.post('/financial/newUser', createUser)

/**
 * @swagger
 * /financial/users/:userId/update:
 *  put:
 *   summary: Update user
 *   tags: [Users]
 */
router.put('/financial/users/:userId/update', updateUser)

/**
 * @swagger
 * /financial/users/:userId/delete:
 *  delete:
 *   summary: Delete one user
 *   tags: [Users]
 */
router.delete('/financial/users/:userId/delete', deleteUser)




/**
 * @swagger
 * tags:
 *  name: Savings
 *  descriptiom: Endpoints savings
 */

/**
 * @swagger
 * /financial/user/:userId/savings:
 *  get:
 *   summary: Get all of a user's savings 
 *   tags: [Savings]
 */
router.get ('/financial/user/:userId/savings', getSavings)

/**
 * @swagger
 * /financial/user/:userId/savings/:savingId:
 *  get:
 *   summary: Get savings from a user's
 *   tags: [Savings]
 */
router.get ('/financial/user/:userId/savings/:savingId', getSaving)

/**
 * @swagger
 * /financial/user/:userId/savings/:savingId/update:
 *  put:
 *   summary: Update savings from a user's
 *   tags: [Savings]
 */
router.put ('/financial/user/:userId/savings/:savingId/update', updateSaving)

/**
 * @swagger
 * /financial/user/:userId/savings/:savingId/delete:
 *  delete:
 *   summary: Delete savings from a user's
 *   tags: [Savings]
 */
router.delete ('/financial/user/:userId/savings/:savingId/delete', deleteSaving)

/**
 * @swagger
 * /financial/user/:userId/savings/newSaving:
 *  post:
 *   summary: Create savings from a user's
 *   tags: [Savings]
 */
router.post ('/financial/user/:userId/savings/newSaving', createSaving)




/**
 * @swagger
 * tags:
 *  name: Investments
 *  description: Endpoints investments
 */

/**
 * @swagger
 * /financial/user/:userId/investments:
 *  get:
 *   summary: Get all of a user's investments 
 *   tags: [Investments]
 */
router.get ('/financial/user/:userId/investments', getInvestments)

/**
 * @swagger
 * /financial/user/:userId/savings/newSaving:
 *  get:
 *   summary: Get investments from a user's
 *   tags: [Investments]
 */
router.get ('/financial/user/:userId/investments/:investmentId', getInvestment)

/**
 * @swagger
 * /financial/user/:userId/investments/:investmentId/update:
 *  put:
 *   summary: Update investments from a user's
 *   tags: [Investments]
 */
router.put ('/financial/user/:userId/investments/:investmentId/update', updateInvestment)

/**
 * @swagger
 * /financial/user/:userId/investments/:investmentId/delete:
 *  delete:
 *   summary: Delete savings from a user's
 *   tags: [Investments]
 */
router.delete ('/financial/user/:userId/investments/:investmentId/delete', deleteInvestment)

/**
 * @swagger
 * /financial/user/:userId/investments/newInvestment:
 *  post:
 *   summary: Create investments from a user's
 *   tags: [Investments]
 */
router.post ('/financial/user/:userId/investments/newInvestment', createInvestment)




/**
 * @swagger
 * tags:
 *  name: Incomes
 *  description: Endpoints incomes
 */

/**
 * @swagger
 * /financial/user/:userId/incomes:
 *  get:
 *   summary: Get all of a user's incomes
 *   tags: [Incomes]
 */
router.get ('/financial/user/:userId/incomes', getIncomes)

/**
 * @swagger
 * /financial/user/:userId/incomes/:incomeId:
 *  get:
 *   summary: Get incomes from a user's
 *   tags: [Incomes]
 */
router.get ('/financial/user/:userId/incomes/:incomeId', getIncome)

/**
 * @swagger
 * /financial/user/:userId/incomes/:incomeId/update:
 *  put:
 *   summary: Update incomes from a user's
 *   tags: [Incomes]
 */
router.put ('/financial/user/:userId/incomes/:incomeId/update', updateIncome)

/**
 * @swagger
 * /financial/user/:userId/incomes/:incomeId/delete:
 *  delete:
 *   summary: Delete incomes from a user's
 *   tags: [Incomes]
 */
router.delete ('/financial/user/:userId/incomes/:incomeId/delete', deleteIncome)

/**
 * @swagger
 * /financial/user/:userId/income/newIncome:
 *  post:
 *   summary: Create incomes from a user's
 *   tags: [Incomes]
 */
router.post ('/financial/user/:userId/income/newIncome', createIncome)




/**
 * @swagger
 * tags: 
 *  name: Expenses
 *  description: Endpoints expenses
 */

/**
 * @swagger
 * /financial/user/:userId/expenses:
 *  get:
 *   summary: Get all of a user's expenses
 *   tags: [Expenses]
 */
router.get ('/financial/user/:userId/expenses', getExpenses)

/**
 * @swagger
 * /financial/user/:userId/expenses/:expenseId:
 *  get:
 *   summary: Get expenses from a user's
 *   tags: [Expenses]
 */
router.get ('/financial/user/:userId/expenses/:expenseId', getExpense)

/**
 * @swagger
 * /financial/user/:userId/expenses/:expenseId/update:
 *  put:
 *   summary: Update expenses from a user's
 *   tags: [Expenses]
 */
router.put ('/financial/user/:userId/expenses/:expenseId/update', updateExpense)

/**
 * @swagger
 * /financial/user/:userId/expenses/:expenseId/delete:
 *  delete:
 *   summary: Create expenses from a user's
 *   tags: [Expenses]
 */
router.delete ('/financial/user/:userId/expenses/:expenseId/delete', deleteExpense)

/**
 * @swagger
 * /financial/user/:userId/expenses/newExpense:
 *  post:
 *   summary: Create expenses from a user's
 *   tags: [Expenses]
 */
router.post ('/financial/user/:userId/expenses/newExpense', createExpense)





/**
 * @swagger
 * tags: 
 *  name: Credits
 *  description: Endpoints credits
 */

/**
 * @swagger
 * /financial/user/:userId/credits:
 *  get:
 *   summary: Get all of a user's credits
 *   tags: [Credits]
 */
router.get ('/financial/user/:userId/credits', getCredits)

/**
 * @swagger
 * /financial/user/:userId/credits/:creditId:
 *  get:
 *   summary: Get credits from a user's
 *   tags: [Credits]
 */
router.get ('/financial/user/:userId/credits/:creditId', getCredit)

/**
 * @swagger
 * /financial/user/:userId/credits/:creditId/update:
 *  put:
 *   summary: Update credits from a user's
 *   tags: [Credits]
 */
router.put ('/financial/user/:userId/credits/:creditId/update', updateCredit)

/**
 * @swagger
 * /financial/user/:userId/credits/:creditId/delete:
 *  delete:
 *   summary: Delete credtis from a user's
 *   tags: [Credits]
 */
router.delete ('/financial/user/:userId/credits/:creditId/delete', deleteCredit)

/**
 * @swagger
 * /financial/user/:userId/credits/newCredit:
 *  post:
 *   summary: Create credits from a user's
 *   tags: [Credits]
 */
router.post ('/financial/user/:userId/credits/newCredit', createCredit)




/**
 * @swagger
 * tags:
 *  name: Bills
 *  description: Endpoints bills
 */

/**
 * @swagger
 * /financial/user/:userId/bills:
 *  get:
 *   summary: Get all of a user's bills
 *   tags: [Bills]
 */
router.get ('/financial/user/:userId/bills', getBills)

/**
 * @swagger
 * /financial/user/:userId/bills/:billId:
 *  get:
 *   summary: Get bills from a user's
 *   tags: [Bills]
 */
router.get ('/financial/user/:userId/bills/:billId', getBill)

/**
 * @swagger
 * /financial/user/:userId/bills/:billId/update:
 *  put:
 *   summary: Create bills from a user's
 *   tags: [Bills]
 */
router.put ('/financial/user/:userId/bills/:billId/update', updateBill)

/**
 * @swagger
 * /financial/user/:userId/bills/:billId/delete:
 *  delete:
 *   summary: Delete bills from a user's
 *   tags: [Bills]
 */
router.delete ('/financial/user/:userId/bills/:billId/delete', deleteBill)

/**
 * @swagger
 * /financial/user/:userId/bills/newBill:
 *  post:
 *   summary: Create bills from a user's
 *   tags: [Bills]
 */
router.post ('/financial/user/:userId/bills/newBill', createBill)



export default router