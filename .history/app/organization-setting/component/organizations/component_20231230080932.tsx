import { Organization, TableProps } from "./props";
import React from 'react';

const Component = (props: TableProps) => {
    const {
        onBack,
        organizations,
        show,
    } = props;

    if (show == 'list') {
        return (
            <div className="bg-bg-color min-h-screen overflow-auto pb-5">
                <div className="bg-white border-b-2 border-black">
                    <h1 className="pl-20 pt-5 pb-5 text-l font-bold">
                        <a
                            className="text-blue-600 cursor-pointer"
                            onClick={() => onBack()}
                        >
                            Organization Setting
                        </a>
                        &nbsp;&gt; Organizations
                    </h1>
                </div>
                <div>
                    <table className="table mt-2 border-b border-black">
                        <thead>
                            <tr style={{ backgroundColor: '#8ABCDE', color: '#000' }}>
                                <th>Name</th>
                                <th>Trading Name</th>
                                <th>industry</th>
                                <th>Organization Type</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                organizations.map((organization: Organization) => (
                                    <React.Fragment key={organization.id}>
                                        <tr key={organization.id}>
                                            <td>{organization.name}</td>
                                            <td>{organization.tradingName}</td>
                                            <td>{organization.industry}</td>
                                            <td>{organization.organizationType}</td>
                                        </tr>
                                    </React.Fragment>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    if (show == 'detail') {
        return (
            <>
            </>
        )
    }
};

export default Component;
