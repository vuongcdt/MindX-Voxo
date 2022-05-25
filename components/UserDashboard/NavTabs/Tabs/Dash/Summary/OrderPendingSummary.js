import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import { useMyOrdersPending } from '../../../../../../reactQueryHook';

function OrderPendingSummary() {
    const { isLoading, isError, data, error, isFetching } = useMyOrdersPending();
    useEffect(() => {
        if (isError) {
            toast.error(error, {
                position: 'bottom-left',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [isError]);
    return (
        <div className="order-box">
            <div className="order-box-image">
                <img
                    src="/images/svg/sent.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
            </div>
            <div className="order-box-contain">
                <img
                    src="/images/svg/sent1.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
                <div>
                    <h5 className="font-light">pending orders</h5>
                    <h3>
                        {isLoading || isError || isFetching ? (
                            <Skeleton width={80} />
                        ) : (
                            data.headers['x-wp-total']
                        )}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default OrderPendingSummary;
