import React, { useState, useEffect } from "react";
import DrinksApi from "../../backend/drinks";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import styles from "./Details.module.scss";
import { Button } from "../../components/Button";


export const DrinkDetails = props => {
    const [idDrink, setIdDrink] = useState("");
    const [drink, setDrinkDetails] = useState({});

    const getDrinks = () => {
        let location = props.history.location;
        let idDrink = location.pathname.slice(7);

        DrinksApi.getDrinkDetails(idDrink).then(data => {
            setIdDrink(idDrink);
            setDrinkDetails(data[0]);
        });
    };

    useEffect(() => {
        getDrinks();
    }, []);

    return (
        <div className={`${styles.container} ${styles.options}`}>
            <Card className={`${styles.card}`}>
                <Card.Img
                    className={`${styles.cardImg}`}
                    variant="top"
                    src={drink.strDrinkThumb}
                />
                <Card.Body className={`${styles.cardBody}`}>
                    <h1 className={`${styles.drinkName}`}> {drink.strDrink} </h1>
                    <Card.Text className={`${styles.category}`}>
                        <div>
                            <h5>Drink Category:</h5>
                            {drink.strCategory}
                        </div>
                        <div>
                            <h5>Type of Glass:</h5>
                            {drink.strGlass}
                        </div>
                    </Card.Text>
                </Card.Body>
                <ListGroup className={`${styles.ingredients}`}>
                    <h5>Ingredients:</h5>
                    <ListGroupItem>{drink.strIngredient1}</ListGroupItem>
                    <ListGroupItem>{drink.strIngredient2}</ListGroupItem>
                    <ListGroupItem>{drink.strIngredient3}</ListGroupItem>
                    <ListGroupItem>{drink.strIngredient4}</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <Button
                        className={`${styles.detailButton}`}
                        type="submit"
                        onClick={() =>
                            props.history.push({
                                pathname: "/quiz"
                            })
                        }
                        content="Back to Results"
                    />
                </Card.Footer>
            </Card>
        </div>
    );
};
