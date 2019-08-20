import { IBaseComponentProps } from '../';

export interface IPortfolioInsightsProps extends IBaseComponentProps {
    chartConfigurationListName: string;
    columnConfigListName: string;
    columnsListName: string;
    viewsListName: string;
}

export const PortfolioInsightsDefaultProps: Partial<IPortfolioInsightsProps> = {};
