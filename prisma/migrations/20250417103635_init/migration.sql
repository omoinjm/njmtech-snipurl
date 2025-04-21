-- CreateTable
CREATE TABLE "lu_short_url" (
    "id" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "short_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lu_short_url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lu_short_url_short_code_key" ON "lu_short_url"("short_code");
