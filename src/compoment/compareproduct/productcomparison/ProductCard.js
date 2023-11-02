
import { Card, Button, Image } from "semantic-ui-react";


const ProductCard = ({
  product,
  addToCompare,
  removeFromCompare,
  selected,
}) => (
  <Card key={product.id}>
    <Image size="medium" src={product.img} />
    <Card.Content verticalAlign="middle">
      <Card.Header>
       {product.brands.id}
      </Card.Header>
      <Card.Description>{product.Name}</Card.Description>
      <Card.Description>${product.Price}</Card.Description>

      <Card.Content extra>
        {selected && selected.includes(product) ? (
          <Button color="red" onClick={() => removeFromCompare(product)}>
            Remove
          </Button>
        ) : (
          <Button color="blue" onClick={() => addToCompare(product)}>
            Compare
          </Button>
        )}
      </Card.Content>
    </Card.Content>
  </Card>
);

export default ProductCard;