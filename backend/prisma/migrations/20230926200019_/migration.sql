/*
  Warnings:

  - You are about to drop the column `proficienyLevel` on the `UserLanguage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserLanguage" DROP COLUMN "proficienyLevel",
ADD COLUMN     "proficiencyLevel" INTEGER NOT NULL DEFAULT 0;
