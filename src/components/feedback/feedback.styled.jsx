import styled from '@emotion/styled'

export const Box = styled.div`
display: flex;
background-color: teal;
padding: 10px;
margin-bottom: 10px;
`;

export const Title = styled.p`
font-size: 12;
`;

` <div>
<div>
    <p>Please leave feedback</p>
    <button type="button" onClick={this.clickGood}>good</button>
    <button type="button" onClick={this.clickNeutral}>neutral</button>
    <button type="button" onClick={this.clickBad}>bad</button>
</div>
<div>
    <p>Statistic</p>
    <span>good</span><span>{this.state.good}</span>
    <span>neutral</span><span>{this.state.neutral}</span>
    <span>bad</span><span>{this.state.bad}</span>
</div>
</div>`