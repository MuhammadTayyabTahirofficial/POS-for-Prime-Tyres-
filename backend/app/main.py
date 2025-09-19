from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI(title="Prime Tyres POS API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class DashboardCard(BaseModel):
    title: str
    value: str
    cta: str


class SummaryItem(BaseModel):
    product: str
    orders_qty: int
    orders: float
    returns_qty: int
    returns: float
    profit: float


class TableRow(BaseModel):
    id: int
    date: str
    invoice: str
    customer: str
    product: str
    quantity: int
    price: float
    total: float
    status: str


class PurchaseRow(BaseModel):
    id: int
    date: str
    invoice: str
    supplier: str
    product: str
    quantity: int
    cost: float
    total: float
    status: str


def currency(value: float) -> str:
    return f"{value:,.2f}"


def build_dashboard() -> List[DashboardCard]:
    return [
        DashboardCard(title="Purchases", value=currency(359042742.18), cta="New Purchase"),
        DashboardCard(title="Inventory", value="1416", cta="View Inventory"),
        DashboardCard(title="Sales", value=currency(13946644477172.12), cta="New Sale"),
        DashboardCard(title="Profit", value=currency(19318321747033.24), cta="View Profit"),
        DashboardCard(title="Sale Orders", value="723", cta="New Order"),
        DashboardCard(title="Purchase Orders", value="139", cta="New Purchase"),
        DashboardCard(title="Suppliers", value="287", cta="View Suppliers"),
        DashboardCard(title="Customers", value="1179", cta="View Customers"),
    ]


def build_summary() -> List[SummaryItem]:
    return [
        SummaryItem(product="Baju Tidar", orders_qty=5, orders=120.0, returns_qty=0, returns=0.0, profit=12.0),
        SummaryItem(product="Ciprtalicious", orders_qty=10, orders=233.0, returns_qty=0, returns=0.0, profit=25.0),
        SummaryItem(product="FT Chips", orders_qty=1, orders=19.0, returns_qty=0, returns=0.0, profit=2.0),
        SummaryItem(product="FQ magodi wish M", orders_qty=3, orders=45.0, returns_qty=0, returns=0.0, profit=5.0),
    ]


def build_sales() -> List[TableRow]:
    return [
        TableRow(
            id=1,
            date="21 Sep 2015",
            invoice="INV-1001",
            customer="Walk-in",
            product="Tyre Rotation",
            quantity=2,
            price=45.5,
            total=91.0,
            status="Paid",
        ),
        TableRow(
            id=2,
            date="21 Sep 2015",
            invoice="INV-1002",
            customer="Walk-in",
            product="Tyre Replacement",
            quantity=4,
            price=80.0,
            total=320.0,
            status="Paid",
        ),
        TableRow(
            id=3,
            date="21 Sep 2015",
            invoice="INV-1003",
            customer="Walk-in",
            product="Wheel Alignment",
            quantity=1,
            price=60.0,
            total=60.0,
            status="Paid",
        ),
    ]


def build_purchases() -> List[PurchaseRow]:
    return [
        PurchaseRow(
            id=1,
            date="19 Sep 2015",
            invoice="PUR-9001",
            supplier="TyreCo",
            product="Radial Tyre",
            quantity=40,
            cost=35.0,
            total=1400.0,
            status="Received",
        ),
        PurchaseRow(
            id=2,
            date="18 Sep 2015",
            invoice="PUR-9002",
            supplier="TyreCo",
            product="Off-road Tyre",
            quantity=15,
            cost=85.0,
            total=1275.0,
            status="Received",
        ),
    ]


@app.get("/api/dashboard", response_model=List[DashboardCard])
def get_dashboard() -> List[DashboardCard]:
    return build_dashboard()


@app.get("/api/summary", response_model=Dict[str, Any])
def get_summary() -> Dict[str, Any]:
    return {
        "period": {"from": "05-Sep-2015", "to": "30-Sep-2015"},
        "items": build_summary(),
    }


@app.get("/api/sales", response_model=List[TableRow])
def get_sales() -> List[TableRow]:
    return build_sales()


@app.get("/api/purchases", response_model=List[PurchaseRow])
def get_purchases() -> List[PurchaseRow]:
    return build_purchases()


class OrderRequest(BaseModel):
    customer_name: str
    customer_address: str | None = None
    items: List[Dict[str, Any]]
    payments: Dict[str, float]


@app.post("/api/sales")
def create_sale(order: OrderRequest) -> Dict[str, Any]:
    return {"message": "Sale recorded", "order": order}


@app.post("/api/purchases")
def create_purchase(order: OrderRequest) -> Dict[str, Any]:
    return {"message": "Purchase recorded", "order": order}


class Product(BaseModel):
    sku: str
    product_name: str
    purchase_price: float
    sale_price: float
    stock: int
    is_sellable: bool


@app.post("/api/products")
def create_product(product: Product) -> Dict[str, Any]:
    return {"message": "Product created", "product": product}


class ReturnRequest(BaseModel):
    reference_number: str
    notes: str | None = None
    items: List[Dict[str, Any]]


@app.post("/api/sales/returns")
def create_sale_return(return_request: ReturnRequest) -> Dict[str, Any]:
    return {"message": "Sale return recorded", "return": return_request}


@app.post("/api/purchases/returns")
def create_purchase_return(return_request: ReturnRequest) -> Dict[str, Any]:
    return {"message": "Purchase return recorded", "return": return_request}
