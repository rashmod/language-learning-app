/*
  Warnings:

  - The primary key for the `UserLanguage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userLanguageId` on the `UserLanguage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserLanguage" DROP CONSTRAINT "UserLanguage_pkey",
DROP COLUMN "userLanguageId",
ADD CONSTRAINT "UserLanguage_pkey" PRIMARY KEY ("userId", "languageId");
