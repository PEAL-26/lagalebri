/*
  Warnings:

  - You are about to drop the column `propertyId` on the `compartments` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `propertyId` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `propertyId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `propertyId` on the `interations` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `interations` table. All the data in the column will be lost.
  - The primary key for the `profiles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `propertyId` on the `ratings` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ratings` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `search_histories` table. All the data in the column will be lost.
  - You are about to drop the column `propertyId` on the `views` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `views` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[property_id]` on the table `compartments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,contact]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[property_id,user_id]` on the table `favorites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[property_id,user_id]` on the table `ratings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `property_id` to the `compartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `property_id` to the `favorites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `favorites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `property_id` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `property_id` to the `interations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `interations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `property_id` to the `ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `search_histories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `property_id` to the `views` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `views` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "compartments" DROP CONSTRAINT "compartments_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_userId_fkey";

-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_userId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "interations" DROP CONSTRAINT "interations_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "interations" DROP CONSTRAINT "interations_userId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_userId_fkey";

-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_userId_fkey";

-- DropForeignKey
ALTER TABLE "search_histories" DROP CONSTRAINT "search_histories_userId_fkey";

-- DropForeignKey
ALTER TABLE "views" DROP CONSTRAINT "views_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "views" DROP CONSTRAINT "views_userId_fkey";

-- DropIndex
DROP INDEX "compartments_propertyId_key";

-- DropIndex
DROP INDEX "compartments_propertyId_name_idx";

-- DropIndex
DROP INDEX "contacts_userId_contact_key";

-- DropIndex
DROP INDEX "favorites_propertyId_userId_idx";

-- DropIndex
DROP INDEX "favorites_propertyId_userId_key";

-- DropIndex
DROP INDEX "images_propertyId_idx";

-- DropIndex
DROP INDEX "interations_userId_propertyId_idx";

-- DropIndex
DROP INDEX "profiles_userId_idx";

-- DropIndex
DROP INDEX "profiles_userId_key";

-- DropIndex
DROP INDEX "ratings_propertyId_userId_key";

-- DropIndex
DROP INDEX "ratings_userId_propertyId_idx";

-- DropIndex
DROP INDEX "views_propertyId_userId_idx";

-- AlterTable
ALTER TABLE "compartments" DROP COLUMN "propertyId",
ADD COLUMN     "property_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "userId",
ADD COLUMN     "user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "favorites" DROP COLUMN "propertyId",
DROP COLUMN "userId",
ADD COLUMN     "property_id" UUID NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "images" DROP COLUMN "propertyId",
ADD COLUMN     "property_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "interations" DROP COLUMN "propertyId",
DROP COLUMN "userId",
ADD COLUMN     "property_id" UUID NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_pkey",
DROP COLUMN "userId",
ADD COLUMN     "user_id" UUID NOT NULL,
ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("user_id");

-- AlterTable
ALTER TABLE "ratings" DROP COLUMN "propertyId",
DROP COLUMN "userId",
ADD COLUMN     "property_id" UUID NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "search_histories" DROP COLUMN "userId",
ADD COLUMN     "user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "views" DROP COLUMN "propertyId",
DROP COLUMN "userId",
ADD COLUMN     "property_id" UUID NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "compartments_property_id_key" ON "compartments"("property_id");

-- CreateIndex
CREATE INDEX "compartments_property_id_name_idx" ON "compartments"("property_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_user_id_contact_key" ON "contacts"("user_id", "contact");

-- CreateIndex
CREATE INDEX "favorites_property_id_user_id_idx" ON "favorites"("property_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_property_id_user_id_key" ON "favorites"("property_id", "user_id");

-- CreateIndex
CREATE INDEX "images_property_id_idx" ON "images"("property_id");

-- CreateIndex
CREATE INDEX "interations_user_id_property_id_idx" ON "interations"("user_id", "property_id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_user_id_key" ON "profiles"("user_id");

-- CreateIndex
CREATE INDEX "profiles_user_id_idx" ON "profiles"("user_id");

-- CreateIndex
CREATE INDEX "ratings_user_id_property_id_idx" ON "ratings"("user_id", "property_id");

-- CreateIndex
CREATE UNIQUE INDEX "ratings_property_id_user_id_key" ON "ratings"("property_id", "user_id");

-- CreateIndex
CREATE INDEX "views_property_id_user_id_idx" ON "views"("property_id", "user_id");

-- AddForeignKey
ALTER TABLE "compartments" ADD CONSTRAINT "compartments_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interations" ADD CONSTRAINT "interations_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interations" ADD CONSTRAINT "interations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "search_histories" ADD CONSTRAINT "search_histories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
