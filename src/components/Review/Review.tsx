import { Text } from "@adev/ui-kit";
import { IReview } from ".";
import styles from "./Review.module.scss"

export interface IReviewProps {
    review: IReview
}

const Review = ({ review }: IReviewProps) => {
    return (
        <>
            <div className={styles.wrapper}>
                <Text typography="headline-md">{review.userName}</Text>
                <Text typography="body-long-sm">{review.text}</Text>
            </div>
        </>
    )
}

export { Review };