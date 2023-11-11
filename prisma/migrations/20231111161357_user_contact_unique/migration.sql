/*
  Warnings:

  - A unique constraint covering the columns `[userId,contact]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "contacts_contact_key";

-- CreateIndex
CREATE UNIQUE INDEX "contacts_userId_contact_key" ON "contacts"("userId", "contact");
