/*
  Warnings:

  - You are about to alter the column `score` on the `TestResult` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `score` to the `UserLanguage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestResult" ALTER COLUMN "score" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "UserLanguage" ADD COLUMN     "score" INTEGER NOT NULL;
