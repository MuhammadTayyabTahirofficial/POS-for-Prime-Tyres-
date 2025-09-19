from pydantic import BaseModel
from typing import List, Optional
from fastapi import HTTPException

class Product(BaseModel):
    id: int
    name: str
    sku: str
    price: float
    stock: int = 0
    active: bool = True
    notes: Optional[str] = None

PRODUCTS: List[Product] = [
    Product(id=1, name="Tyre A", sku="TYR-A", price=120.0, stock=10),
    Product(id=2, name="Tyre B", sku="TYR-B", price=95.0, stock=25),
]

@app.get("/api/products", response_model=List[Product])
def list_products():
    return PRODUCTS

@app.get("/api/products/{pid}", response_model=Product)
def get_product(pid: int):
    for p in PRODUCTS:
        if p.id == pid:
            return p
    raise HTTPException(404, "Product not found")

@app.post("/api/products", response_model=Product, status_code=201)
def create_product(p: Product):
    if any(x.id == p.id for x in PRODUCTS):
        raise HTTPException(400, "ID already exists")
    PRODUCTS.append(p)
    return p

@app.put("/api/products/{pid}", response_model=Product)
def update_product(pid: int, data: Product):
    for i, p in enumerate(PRODUCTS):
        if p.id == pid:
            PRODUCTS[i] = data
            return data
    raise HTTPException(404, "Product not found")

@app.delete("/api/products/{pid}", status_code=204)
def delete_product(pid: int):
    global PRODUCTS
    before = len(PRODUCTS)
    PRODUCTS = [p for p in PRODUCTS if p.id != pid]
    if len(PRODUCTS) == before:
        raise HTTPException(404, "Product not found")
