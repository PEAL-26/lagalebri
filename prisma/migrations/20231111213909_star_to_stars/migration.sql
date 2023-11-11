/*
  Warnings:

  - You are about to drop the column `start` on the `ratings` table. All the data in the column will be lost.
  - Added the required column `stars` to the `ratings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ratings" DROP COLUMN "start",
ADD COLUMN     "stars" INTEGER NOT NULL;
