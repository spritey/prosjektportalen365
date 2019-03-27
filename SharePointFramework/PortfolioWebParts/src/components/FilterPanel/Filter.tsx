import * as React from 'react';
import styles from './Filter.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { IFilterItemProps, FilterItem } from './FilterItem';

export interface IFilterProps {
    column: IColumn;
    items: IFilterItemProps[];
    onFilterChange?: (column: IColumn, selectedItems: string[]) => void;
}

export interface IFilterState {
    isCollapsed: boolean;
    items: IFilterItemProps[];
}

export class Filter extends React.Component<IFilterProps, IFilterState> {
    constructor(props: IFilterProps) {
        super(props);
        this.state = { isCollapsed: false, items: props.items };
    }

    public render(): React.ReactElement<IFilterProps> {
        return (
            <div className={styles.filter}>
                <div className={styles.filterSectionHeader}>
                    <span className={styles.titleText}>{this.props.column.name}</span>
                    <span className={styles.titleIcon}>
                        <Icon iconName={this.state.isCollapsed ? 'ChevronUp' : 'ChevronDown'} />
                    </span>
                </div>
                <div hidden={this.state.isCollapsed}>
                    <ul className={styles.filterSectionContent}>
                        {this.renderItems()}
                    </ul>
                </div>
            </div>
        );
    }

    /**
     * Render filter items
     */
    private renderItems() {
        return this.state.items.map(props => <FilterItem {...props} onChanged={(event, checked) => this.onChanged(props, checked)} />);
    }

    @autobind
    private onChanged(item: IFilterItemProps, checked: boolean) {
        const { items } = this.state;
        items.filter(_item => _item.name === item.name)[0].selected = checked;
        this.setState({ items });
        const selectedItems = items.filter(i => i.selected).map(i => i.name);
        this.props.onFilterChange(this.props.column, selectedItems);
    }
}
