/*
  Warnings:

  - You are about to drop the column `tipe` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `type` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "tipe",
ADD COLUMN     "type" VARCHAR(150) NOT NULL;
