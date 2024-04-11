-- CreateEnum
CREATE TYPE "role_type" AS ENUM ('ROOT', 'USER');

-- CreateTable
CREATE TABLE "usuarios" (
    "codigo" VARCHAR(26) NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "role" "role_type" NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,
    "data_expiracao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("codigo")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
