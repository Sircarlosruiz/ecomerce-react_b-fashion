import React, { Component } from "react";
import ProductContext from "../../context/ProductContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      product: this.emptyProduct,
      selectedProduct: null,
      visibleEdit: false,
    };
    this.productServices = new ProductContext();
  }


  componentDidMount() {
    this.productServices
      .getAll()
      .then((data) => this.setState({ products: data }));
  }

  render() {
    const toolbarBoton = (
      <>
        <Button label="Nuevo" className="mr-2" onClick={this.showDialogNew} />
        <Button label="Actualizar" className="mr-2" onClick={this.showDialogEdit} />
        <Button label="Borrar" className="p-button-success mr-2" />
      </>
    );
    return (
      <div style={{ width: "80%", margin: "0 auto", marginTop: "20px" }}>
        <Toolbar left={toolbarBoton}></Toolbar>
        <Panel header="Productos">
          <DataTable
            value={this.state.products}
            dataKey="id"
            selection={this.state.selectedProduct}
            onSelectionChange={(e) =>
              this.setState({ selectedProduct: e.value })
            }
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
          >
            <Column
              selectionMode="single"
              headerStyle={{ width: "2rem" }}
            ></Column>
            <Column field="id" header="Id"></Column>
            <Column field="name" header="Nombre"></Column>
            <Column field="description" header="Descripcion"></Column>
            <Column field="imagen" header="Imagen"></Column>
          </DataTable>
        </Panel>
        <Dialog
          header={"Editar Producto"}
          modal="true"
          visible={this.state.visibleEdit}
          onHide={this.hideDialog}
        >
          <p>Soy Edit</p>
        </Dialog>
      </div>
    );
  }


  showDialogNew = () => {
    this.setState({
      visibleEdit: true,
    });
  };

  showDialogEdit = () => {
    this.setState({
      visibleEdit: true,
    });
  };

  hideDialog = () => {
    this.setState({
      visibleEdit: false,
    });
  };
}
console.log(ProductContext);