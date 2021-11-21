/*
  Warnings:

  - A unique constraint covering the columns `[provider]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[provider_account_id]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "accounts_provider_provider_account_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_key" ON "accounts"("provider");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_account_id_key" ON "accounts"("provider_account_id");
